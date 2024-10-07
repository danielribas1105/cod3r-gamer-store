'use client'
import Link from "next/link"
import Image from "next/image"
import { IconShoppingCartPlus } from "@tabler/icons-react"
import { Moeda, Parcelamento, Produto } from "@gstore/core"
import NotaReview from "../shared/nota-review"
import useParcelamento from "@/data/hooks/useParcelamento"
import useCarrinho from "@/data/hooks/useCarrinho"

export interface ProdutoItemProps {
   produto: Produto
}

export default function ProdutoItem(props: ProdutoItemProps) {
   const { produto } = props
   const { adicionarItem } = useCarrinho()
   const parcelamento = useParcelamento(props.produto.precoPromocional)
   return (
      <Link
         href={`/produto/${props.produto.id}`}
         className="flex flex-col text-white bg-violet-dark border border-white/10 rounded-xl relative max-w-[350px]">
         <div className="w-full h-48 relative">
            <div className="absolute flex justify-end top-2.5 right-2.5">
               <NotaReview nota={props.produto.nota} />
            </div>
            <Image
               src={produto.imagem}
               alt={"Imagem do produto"}
               fill
               className="object-contain"
            />
         </div>
         <div className="flex-1 flex flex-col gap-3 p-5 border-t border-white/10">
            <span className="text-lg font-semibold">
               {produto.nome}
            </span>
            <div className="self-start text-sm border-b border-dashed">
               {produto.especificacoes.destaque}
            </div>
            <div className="flex-1"></div>
            <div className="flex flex-col">
               <span className="text-sm text-gray-400 line-through">
                  de {Moeda.formatar(produto.precoBase)}
               </span>
               <span className="text-xl font-semibold text-emerald-400">
                  por {Moeda.formatar(produto.precoPromocional)}
               </span>
               <span className="text-zinc-400 text-xs">
                  até {parcelamento.qtdeParcelas}x de{' '}
                  {Moeda.formatar(parcelamento.valorParcela)}
               </span>
            </div>
            <button
               className="flex justify-center items-center gap-2 h-8 bg-violet-700 hover:border-2 border-emerald-500 rounded-full"
               onClick={(e) => {
                  e.preventDefault()
                  console.log('Adicionar ao carrinho')
                  adicionarItem(props.produto)
               }}>
               <IconShoppingCartPlus size={20} />
               <span>Adicionar</span>
            </button>
         </div>
      </Link>
   )
}