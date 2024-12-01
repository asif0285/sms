import axios from 'axios';
import type { Message } from '../types/message';

const API_URL = 'http://localhost:3000';

export const sendMessage = async (message: Message): Promise<void> => {
  try {
    await axios.post(`${API_URL}/api/messages`, message);
  } catch (error) {
    throw new Error('Failed to send message');
  }
};