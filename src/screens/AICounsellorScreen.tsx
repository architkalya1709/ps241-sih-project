import React, { useState, useRef, useEffect } from 'react';
import type { ScreenId, Language, ChatMessage } from '../types';
import { INITIAL_CHAT_MESSAGES } from '../data/mockData';
import { postChatQuery } from '../api/client';
import {
  Bot,
  Send,
  Mic,
  MicOff,
  Volume2,
  User,
  HeartHandshake,
  ArrowRight,
  RotateCcw
} from 'lucide-react';

interface Props {
  onSelectScreen: (screen: ScreenId) => void;
  language: Language;
}

export const AICounsellorScreen: React.FC<Props> = ({ onSelectScreen, language }) => {
  const isHi = language === 'hi';
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_CHAT_MESSAGES);
  const [inputText, setInputText] = useState<string>('');
  const [isListening, setIsListening] = useState<boolean>(false);
  const [activeSpeaker, setActiveSpeaker] = useState<'student' | 'parent'>('parent');
  const [speakingMsgId, setSpeakingMsgId] = useState<string | null>(null);
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = textToSend || inputText;
    if (!query.trim()) return;

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      sender: activeSpeaker,
      senderLabelEn: activeSpeaker === 'parent' ? 'Verma ji (Parent)' : 'Rahul (Student)',
      senderLabelHi: activeSpeaker === 'parent' ? 'वर्मा जी (अभिभावक)' : 'राहुल (छात्र)',
      textEn: query,
      textHi: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputText('');

    setIsTyping(true);

    try {
      const response = await postChatQuery(query, activeSpeaker, language);

      const aiMsg: ChatMessage = {
        id: response.id || `ai-${Date.now()}`,
        sender: 'ai',
        senderLabelEn: 'CareerSaathi AI Counsellor',
        senderLabelHi: 'करियरसाथी एआई काउंसलर',
        textEn: response.textEn,
        textHi: response.textHi,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        actionButtons: response.actionButtons
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      console.error('Chat error:', err);
    } finally {
      setIsTyping(false);
    }
  };

  const toggleVoiceListen = () => {
    setIsListening(!isListening);
    if (!isListening) {
      setTimeout(() => {
        setIsListening(false);
        handleSendMessage(isHi ? 'क्या सोलर तकनीशियन की नौकरी में सरकारी मान्यता मिलती है?' : 'Is Solar Technician recognized by government?');
      }, 3000);
    }
  };

  const simulateSpeechSynthesis = (msgId: string) => {
    if (speakingMsgId === msgId) setSpeakingMsgId(null);
    else {
      setSpeakingMsgId(msgId);
      setTimeout(() => setSpeakingMsgId(null), 4000);
    }
  };

  const resetChat = () => {
    setMessages(INITIAL_CHAT_MESSAGES);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-4">
      
      {/* AI Header Card */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 text-neutral-950 shadow-sm border border-neutral-200 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center font-extrabold shadow-md">
              <Bot className="w-6 h-6" />
            </div>
            <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-black border-2 border-white rounded-full animate-ping" />
            <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-black border-2 border-white rounded-full" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl sm:text-2xl font-black text-neutral-950 tracking-tight">
                CareerSaathi AI Counsellor
              </h1>
              <span className="bg-neutral-100 text-neutral-900 text-[10px] uppercase font-extrabold px-2.5 py-0.5 rounded-full border border-neutral-300">
                Online • RAG Backend Connected
              </span>
            </div>
            <p className="text-xs text-neutral-600 font-medium">
              {isHi ? 'छात्र और माता-पिता के लिए संयुक्त मार्गदर्शन संवाद' : 'Joint Student-Parent Counselling Engine'}
            </p>
          </div>
        </div>

        <button
          onClick={resetChat}
          className="p-2 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 transition-all text-xs flex items-center gap-1 border border-neutral-300"
          title="Reset Conversation"
        >
          <RotateCcw className="w-4 h-4" />
          <span className="hidden sm:inline">{isHi ? 'रीसेट' : 'Reset'}</span>
        </button>
      </div>

      {/* QUICK ACTION BUTTONS PILLS */}
      <div className="bg-white p-3.5 rounded-2xl border border-neutral-200 shadow-sm space-y-2">
        <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 px-1">
          {isHi ? 'त्वरित प्रश्न चुनिए (Quick Action Pills):' : 'Suggested Quick Questions:'}
        </div>
        <div className="flex flex-wrap gap-2">
          {[
            { en: 'What careers suit me?', hi: 'कौन से करियर मेरे अनुकूल हैं?' },
            { en: 'Show earning information', hi: 'कमाई और वेतन की जानकारी दिखाएं' },
            { en: 'Is this career safe?', hi: 'क्या यह करियर सुरक्षित है?' },
            { en: 'What skills are required?', hi: 'किन कौशलों की आवश्यकता है?' },
            { en: 'Show career growth', hi: '5-वर्षीय करियर विकास दिखाएं' },
            { en: 'Compare careers', hi: 'करियर की तुलना करें' },
            { en: 'Talk to a counsellor', hi: 'मानव काउंसलर से बात करें' }
          ].map((pill, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (pill.en === 'Talk to a counsellor') onSelectScreen('human-counsellor');
                else handleSendMessage(isHi ? pill.hi : pill.en);
              }}
              className="px-3 py-1.5 rounded-full bg-neutral-50 hover:bg-neutral-950 hover:text-white border border-neutral-200 text-xs font-semibold text-neutral-800 transition-all"
            >
              {isHi ? pill.hi : pill.en}
            </button>
          ))}
        </div>
      </div>

      {/* CHAT MESSAGES WINDOW */}
      <div className="bg-neutral-50 rounded-3xl p-4 sm:p-6 border border-neutral-200 shadow-inner h-[480px] overflow-y-auto custom-scrollbar space-y-4">
        {messages.map((msg) => {
          const isAI = msg.sender === 'ai';
          const isParent = msg.sender === 'parent';
          const isSpeaking = speakingMsgId === msg.id;

          return (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${isAI ? 'justify-start' : 'justify-end'}`}
            >
              {isAI && (
                <div className="w-9 h-9 rounded-2xl bg-neutral-950 text-white flex items-center justify-center font-bold shrink-0 shadow-md">
                  <Bot className="w-5 h-5" />
                </div>
              )}

              <div
                className={`max-w-[85%] sm:max-w-[75%] rounded-2xl p-4 shadow-sm space-y-2.5 ${
                  isAI
                    ? 'bg-white text-neutral-950 border border-neutral-200'
                    : isParent
                    ? 'bg-neutral-900 text-white font-medium'
                    : 'bg-neutral-800 text-white font-medium'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] opacity-80 border-b border-current/10 pb-1">
                  <span className="font-extrabold">
                    {isHi ? msg.senderLabelHi : msg.senderLabelEn}
                  </span>
                  <div className="flex items-center gap-2">
                    <span>{msg.timestamp}</span>
                    {isAI && (
                      <button
                        onClick={() => simulateSpeechSynthesis(msg.id)}
                        className={`p-1 rounded hover:bg-neutral-100 ${isSpeaking ? 'text-neutral-950 animate-pulse' : 'text-neutral-400'}`}
                        title="Listen Audio Voice"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>

                <p className="text-xs sm:text-sm leading-relaxed">
                  {isHi ? msg.textHi : msg.textEn}
                </p>

                {isAI && msg.actionButtons && (
                  <div className="pt-2 flex flex-wrap gap-2">
                    {msg.actionButtons.map((act, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          if (act.targetScreen) onSelectScreen(act.targetScreen as ScreenId);
                          else if (act.query) handleSendMessage(act.query);
                        }}
                        className="px-3 py-1.5 rounded-lg bg-neutral-950 hover:bg-neutral-800 text-white border border-neutral-900 text-xs font-bold flex items-center gap-1 transition-all"
                      >
                        <span>{isHi ? act.labelHi : act.labelEn}</span>
                        <ArrowRight className="w-3 h-3 text-white" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {!isAI && (
                <div
                  className={`w-9 h-9 rounded-2xl text-white flex items-center justify-center font-bold shrink-0 shadow-md ${
                    isParent ? 'bg-neutral-900' : 'bg-neutral-800'
                  }`}
                >
                  {isParent ? <HeartHandshake className="w-5 h-5" /> : <User className="w-5 h-5" />}
                </div>
              )}
            </div>
          );
        })}

        {isTyping && (
          <div className="flex items-center gap-2 text-xs text-neutral-950 font-bold bg-white p-3 rounded-2xl border border-neutral-200 w-48 shadow-sm">
            <Bot className="w-4 h-4 text-neutral-950 animate-bounce" />
            <span>CareerSaathi is thinking...</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* CHAT INPUT FORM */}
      <div className="bg-white rounded-3xl p-3 sm:p-4 border border-neutral-200 shadow-md space-y-3">
        <div className="flex items-center justify-between text-xs px-2">
          <div className="flex items-center gap-2 text-neutral-600 font-semibold">
            <span>{isHi ? 'किसके रूप में बोल रहे हैं:' : 'Speaking as:'}</span>
            <div className="flex items-center bg-neutral-100 p-0.5 rounded-xl border border-neutral-200">
              <button
                type="button"
                onClick={() => setActiveSpeaker('parent')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  activeSpeaker === 'parent'
                    ? 'bg-neutral-950 text-white shadow-sm'
                    : 'text-neutral-700 hover:text-neutral-950'
                }`}
              >
                {isHi ? 'वर्मा जी (अभिभावक)' : 'Parent (Verma ji)'}
              </button>

              <button
                type="button"
                onClick={() => setActiveSpeaker('student')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  activeSpeaker === 'student'
                    ? 'bg-neutral-950 text-white shadow-sm'
                    : 'text-neutral-700 hover:text-neutral-950'
                }`}
              >
                {isHi ? 'राहुल (छात्र)' : 'Student (Rahul)'}
              </button>
            </div>
          </div>

          {isListening && (
            <div className="flex items-center gap-1.5 text-xs text-neutral-950 font-bold animate-pulse">
              <span className="w-2 h-2 rounded-full bg-neutral-950" />
              <span>{isHi ? 'सुन रहा है... (Listening Voice Input)' : 'Listening Voice Input...'}</span>
            </div>
          )}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex items-center gap-2"
        >
          <button
            type="button"
            onClick={toggleVoiceListen}
            className={`p-3 rounded-2xl border transition-all ${
              isListening
                ? 'bg-neutral-950 text-white border-neutral-950 animate-bounce'
                : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-800 border-neutral-200'
            }`}
            title="Speech Input (Microphone)"
          >
            {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
          </button>

          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder={
              isHi
                ? `${activeSpeaker === 'parent' ? 'अभिभावक' : 'छात्र'} के रूप में अपना प्रश्न टाइप करें...`
                : `Type your question as ${activeSpeaker === 'parent' ? 'Parent' : 'Student'}...`
            }
            className="flex-1 px-4 py-3 rounded-2xl border border-neutral-300 focus:border-neutral-950 focus:ring-1 focus:ring-neutral-950 text-xs sm:text-sm font-medium outline-none bg-white text-neutral-950"
          />

          <button
            type="submit"
            className="p-3.5 rounded-2xl bg-neutral-950 hover:bg-neutral-800 text-white font-bold shadow-md transition-all flex items-center justify-center"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>

      </div>
    </div>
  );
};
