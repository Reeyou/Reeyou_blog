import { Message, MessageBox } from 'element-ui'

export default {
    successMsg: (message) => {
        Message({
            message,
            type: 'success'
        })
    },
    errorMsg: (message) => {
        Message({
            message,
            type: 'success'
        })
    },

    resetFields: (form) => {
        for (let i in form) {
            form[i] = ''
        }
        return form
    }
}
