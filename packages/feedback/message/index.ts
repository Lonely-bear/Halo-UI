import type {App} from 'vue'
import Message from "./src";

(Message as any).install = (app: App) => {
    app.config.globalProperties.$message = Message;
}

export default Message;