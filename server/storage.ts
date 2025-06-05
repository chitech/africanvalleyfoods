import { leads, contactMessages, type Lead, type InsertLead, type ContactMessage, type InsertContactMessage } from "@shared/schema";

export interface IStorage {
  // Lead management
  createLead(lead: InsertLead): Promise<Lead>;
  getLeads(): Promise<Lead[]>;
  getLeadByEmail(email: string): Promise<Lead | undefined>;
  
  // Contact message management
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
}

export class MemStorage implements IStorage {
  private leads: Map<number, Lead>;
  private contactMessages: Map<number, ContactMessage>;
  private currentLeadId: number;
  private currentMessageId: number;

  constructor() {
    this.leads = new Map();
    this.contactMessages = new Map();
    this.currentLeadId = 1;
    this.currentMessageId = 1;
  }

  async createLead(insertLead: InsertLead): Promise<Lead> {
    const id = this.currentLeadId++;
    const lead: Lead = {
      ...insertLead,
      id,
      source: insertLead.source || "lead_form",
      createdAt: new Date(),
    };
    this.leads.set(id, lead);
    return lead;
  }

  async getLeads(): Promise<Lead[]> {
    return Array.from(this.leads.values());
  }

  async getLeadByEmail(email: string): Promise<Lead | undefined> {
    return Array.from(this.leads.values()).find(lead => lead.email === email);
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = this.currentMessageId++;
    const message: ContactMessage = {
      ...insertMessage,
      id,
      createdAt: new Date(),
    };
    this.contactMessages.set(id, message);
    return message;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values());
  }
}

export const storage = new MemStorage();
