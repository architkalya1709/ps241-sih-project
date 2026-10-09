import { executeRAGPipeline } from './ragService';
import type { ChatMessageRequest, ChatMessageResponse } from '../types';

export interface AIService {
  generateResponse(request: ChatMessageRequest): Promise<ChatMessageResponse>;
}

export class MockAIService implements AIService {
  async generateResponse(request: ChatMessageRequest): Promise<ChatMessageResponse> {
    const lang = request.language || 'en';
    return executeRAGPipeline(request.query, request.speaker, lang);
  }
}

export class RealLLMService implements AIService {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async generateResponse(request: ChatMessageRequest): Promise<ChatMessageResponse> {
    // If external LLM API call fails or key is empty, safely fallback to MockAIService RAG pipeline
    if (!this.apiKey) {
      const fallback = new MockAIService();
      return fallback.generateResponse(request);
    }

    try {
      // Plug into Google Gemini or OpenAI API here
      const fallback = new MockAIService();
      return await fallback.generateResponse(request);
    } catch (err) {
      const fallback = new MockAIService();
      return fallback.generateResponse(request);
    }
  }
}

// Factory to select active service based on process.env
export function getAIService(): AIService {
  const apiKey = process.env.GEMINI_API_KEY || process.env.OPENAI_API_KEY;
  if (apiKey) {
    return new RealLLMService(apiKey);
  }
  return new MockAIService();
}
