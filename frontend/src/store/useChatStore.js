import {create} from 'zustand'
import { axiosInstance } from '../lib/axios';
import toast from 'react-hot-toast';

export const useChatStore = create((set, get)=>({
    allContacts: [],
    chats: [],
    messages: [],
    activeTab: "chats",
    selectedUser: null,
    isUserLoading: null,
    isMessageLoading: false,
    isSoundEnabled: JSON.parse(localStorage.getItem("isSoundEnabled")) === true,

    toggleSound: ()=>{
        localStorage.setItem("isSoundEnabled", !get().isSoundEnabled);
        set({isSoundEnabled: !get().isSoundEnabled})
    },

    setActiveTab: (tab)=>{
        set({activeTab: tab})
    },

    setSelectedUser: (selectedUser)=>{set({selectedUser})},

    getAllContacts: async ()=>{
        set({isUserLoading: true})
        try{
            const res = await axiosInstance.get("/messages/contacts");
            set({allContacts: res.data})
        }catch(err){
            console.log("Error in Fetching Contacts", err);
            toast.error(err.response.data.message)
        }finally{
            set({isUserLoading: false})
        }
    },
    getMyChatPartners: async ()=>{
        set({isUserLoading: true})
        try{
            const res = await axiosInstance.get("/messages/chats");
            set({chats: res.data})
        }catch(err){
            console.log("Error in Fetching Chats", err);
            toast.error(err.response.data.message)
        }finally{
            set({isUserLoading: false})
        }
    },

    getMessagesByUserId: async (userId) => {
    set({ isMessagesLoading: true });
    try {
      const res = await axiosInstance.get(`/messages/${userId}`);
      set({ messages: res.data });
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      set({ isMessagesLoading: false });
    }
    },

    sendMessage: async (messageData) => {
      const {selectedUser, messages} = get();

      try{
        const res = await axiosInstance.post(`/messages/send/${selectedUser._id}`, messageData);
        set({messages: messages.concat(res.data)})
      }catch(err){
        toast.error(err.response?.data?.message || "Something went wrong")
      }
    },
}))