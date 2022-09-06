import { Component, OnInit } from '@angular/core';
import { ChatsService } from './chats.service';

@Component({
    selector: 'app-chats',
    templateUrl: './chats.component.html',
    styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {
    roomSelected: string = 'Room A'
    message: string = ''
    chatList: string[] = []

    constructor(private service: ChatsService) { }

    ngOnInit(): void {
        this.service.socketListen('message').subscribe(
            (response) => {
                this.chatList.push(response)
            })
    }

    joinRoom(room: string) {
        this.roomSelected = room
        this.service.socketConnection(room)
        this.service.getChatsByRoom(room).subscribe({
            next: (chats: any) => {
                this.chatList = chats.map(
                    (chat: any) => chat.message)
            },
            error: (error) => console.log(error)
        })
    }

    sendMessage() {
        // socket emit event message
        this.service.socketEmit('message', {
            room: this.roomSelected, 
            messageText: this.message
        })
        this.message = ''
    }

    disconnect() {
        console.log('Disconnect')
    }
}
