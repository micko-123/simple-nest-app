import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreareMessageDtos } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
	@Get()
	getMessages(){
		console.log('all messages')
		return ('<h1>hi</h1>')
	};

	@Post()
	createMessage(@Body() body: any){
		console.log(body)
	};

	@Get('/:id')
	getMessage(@Param('id') id: string ){
		console.log(id)
	};
}
