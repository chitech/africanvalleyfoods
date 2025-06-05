import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertLeadSchema, insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Lead capture endpoint
  app.post("/api/leads", async (req, res) => {
    try {
      const leadData = insertLeadSchema.parse(req.body);
      
      // Check if lead already exists
      const existingLead = await storage.getLeadByEmail(leadData.email);
      if (existingLead) {
        return res.status(400).json({ 
          message: "Email already registered. You're already on our list!" 
        });
      }

      const lead = await storage.createLead(leadData);
      res.status(201).json({ 
        message: "Thank you! Your free recipe guide is on its way to your email.",
        lead: { id: lead.id, email: lead.email }
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Please check your information and try again.",
          errors: error.errors 
        });
      }
      res.status(500).json({ message: "Something went wrong. Please try again." });
    }
  });

  // Newsletter signup endpoint
  app.post("/api/newsletter", async (req, res) => {
    try {
      const { email } = req.body;
      
      if (!email || !z.string().email().safeParse(email).success) {
        return res.status(400).json({ message: "Please enter a valid email address." });
      }

      // Check if already subscribed
      const existingLead = await storage.getLeadByEmail(email);
      if (existingLead) {
        return res.status(400).json({ 
          message: "You're already subscribed to our newsletter!" 
        });
      }

      const lead = await storage.createLead({
        firstName: "Newsletter",
        lastName: "Subscriber",
        email,
        phone: "",
        source: "newsletter"
      });

      res.status(201).json({ 
        message: "Welcome to our newsletter! You'll receive amazing African recipes and tips."
      });
    } catch (error) {
      res.status(500).json({ message: "Something went wrong. Please try again." });
    }
  });

  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const messageData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(messageData);
      
      res.status(201).json({ 
        message: "Thank you for your message! We'll get back to you within 24 hours.",
        messageId: message.id
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Please fill in all required fields.",
          errors: error.errors 
        });
      }
      res.status(500).json({ message: "Something went wrong. Please try again." });
    }
  });

  // Get leads (admin endpoint - basic)
  app.get("/api/admin/leads", async (req, res) => {
    try {
      const leads = await storage.getLeads();
      res.json({ leads, count: leads.length });
    } catch (error) {
      res.status(500).json({ message: "Error fetching leads" });
    }
  });

  // Get contact messages (admin endpoint - basic)
  app.get("/api/admin/messages", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json({ messages, count: messages.length });
    } catch (error) {
      res.status(500).json({ message: "Error fetching messages" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
