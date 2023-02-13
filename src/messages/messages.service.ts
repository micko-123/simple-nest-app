import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository'

@Injectable()
export class MessagesService {

	constructor(public messagesRepo: MessagesRepository){};

	findOne(id: string){
		return this.messagesRepo.findOne(id);
	};

	findAll(){

		console.log("messages")	

		return this.messagesRepo.findAll();
	};

	create(content: string){
		console.log("messages from service")	

		return this.messagesRepo.create(content);
	};
}