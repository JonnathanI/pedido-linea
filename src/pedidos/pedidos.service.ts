import { Injectable } from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PedidosService {
  constructor (private prisma: PrismaService){}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  createPedido(createPedidoDto: CreatePedidoDto) {
    return 'This action adds a new pedido';
  }

  findAll() {
    return this.prisma.pedidoL.findMany();
  }

  findOne(id: number) {
    return this.prisma.pedidoL.findUnique({where:{id}});
  }

  update(id: number, updatePedidoDto: UpdatePedidoDto) {
    return this.prisma.pedidoL.update({
      where: {id},
      data: updatePedidoDto,
    });
  }

  remove(id: number) {
    return this.prisma.pedidoL.delete({where: {id}});
  }
}
