import React, { useState, useRef, useEffect } from 'react';
import { IconBot, IconClose, IconSend } from './Icons';
import { sendMessageToGemini } from '../services/geminiService';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hi! I am Mahesh\'s AI assistant. Ask me anything about his resume, skills, or projects.' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMsg = inputValue.trim();
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const response = await sendMessageToGemini(userMsg);

    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 md:w-96 bg-slate-900 border border-neon-DEFAULT/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-in-up h-[500px]">
          {/* Header */}
          <div className="bg-slate-800 p-4 flex justify-between items-center border-b border-slate-700">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <h3 className="text-white font-medium">AI Assistant</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white transition-colors"
            >
              <IconClose className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900/95">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
                    msg.role === 'user' 
                      ? 'bg-neon-DEFAULT text-neon-dark rounded-br-none' 
                      : 'bg-slate-800 text-slate-200 rounded-bl-none border border-slate-700'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-800 rounded-2xl rounded-bl-none px-4 py-2 border border-slate-700">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSendMessage} className="p-4 bg-slate-800 border-t border-slate-700 flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about my projects..."
              className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-neon-DEFAULT"
            />
            <button 
              type="submit"
              disabled={isLoading || !inputValue.trim()}
              className="p-2 bg-neon-DEFAULT text-neon-dark rounded-lg hover:bg-neon-glow disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <IconSend className="w-5 h-5" />
            </button>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center justify-center w-14 h-14 bg-neon-DEFAULT rounded-full shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:shadow-[0_0_25px_rgba(34,211,238,0.7)] transition-all duration-300 z-50"
      >
        {isOpen ? (
          <IconClose className="w-6 h-6 text-neon-dark" />
        ) : (
          <IconBot className="w-7 h-7 text-neon-dark group-hover:scale-110 transition-transform" />
        )}
      </button>
    </div>
  );
};

export default ChatWidget;