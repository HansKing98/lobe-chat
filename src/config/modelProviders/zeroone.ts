import { ModelProviderCard } from '@/types/llm';

const ZeroOne: ModelProviderCard = {
  chatModels: [
    {
      description: '支持聊天、问答、对话、写作、翻译等功能。',
      displayName: 'Yi Large',
      functionCall: true,
      id: 'yi-large',
      tokens: 16_384,
    },
    {
      description: '支持聊天、问答、对话、写作、翻译等功能。',
      displayName: 'Yi Large RAG',
      functionCall: true,
      id: 'yi-large-rag',
      tokens: 16_384,
    },
    {
      description: '支持聊天、问答、对话、写作、翻译等功能。',
      displayName: 'Yi Large Turbo',
      functionCall: true,
      id: 'yi-large-turbo',
      tokens: 4000,
    },
    {
      description: '支持聊天、问答、对话、写作、翻译等功能。',
      displayName: 'Yi Medium',
      functionCall: true,
      id: 'yi-medium',
      tokens: 4000,
    },
    {
      description: '支持聊天、问答、对话、写作、翻译等功能。',
      displayName: 'Yi Medium 200K',
      functionCall: true,
      id: 'yi-medium-200k',
      tokens: 200_000,
    },
    {
      description: '支持聊天、问答、对话、写作、翻译等功能。',
      displayName: 'Yi Vision',
      functionCall: true,
      id: 'yi-vision',
      tokens: 2700,
      vision: true,
    },
    {
      description: '',
      displayName: 'gpt 4o',
      functionCall: true,
      id: 'gpt-4o',
      tokens: 2700,
      vision: true,
    },
  ],
  enabled: true,
  id: 'zeroone',
};

export default ZeroOne;
