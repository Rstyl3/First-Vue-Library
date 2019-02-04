import Vue from 'vue'
import wrap from '@vue/web-component-wrapper';
import XfChatBox from './components/XfChatBox';
const ChatBox = wrap(Vue, XfChatBox);
window.customElements.define('chat-box', ChatBox);
