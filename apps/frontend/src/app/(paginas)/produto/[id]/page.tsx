import AvaliacaoEspecializada from "@/components/produto/avaliacao-especializada"
import AvaliacoesUsuarios from "@/components/produto/avaliacoes-usuarios"
import BannerCompra from "@/components/produto/banner-compra"
import InformacoesProduto from "@/components/produto/informacao-produto"
import MedidorDePreco from "@/components/produto/medidor-de-preco"
import ProdutoNaoEncontrado from "@/components/produto/produto-nao-encontrado"
import TituloProduto from "@/components/produto/titulo-produto"
import { produtos } from "@gstore/core"

export default function PaginaProduto(props: any) {
   const id = +props.params.id
   const produto = produtos.find((produto) => produto.id === id)
   return produto ? (
      <div className="flex flex-col gap-20 container py-10">
         <div className="flex flex-col gap-10">
            <TituloProduto produto={produto} />
            <InformacoesProduto produto={produto} />
            <BannerCompra produto={produto} />
            <MedidorDePreco produto={produto}/>
         </div>
         <AvaliacoesUsuarios produto={produto}/>
         <AvaliacaoEspecializada produto={produto}/>
      </div>
   ) : (
      <ProdutoNaoEncontrado />
   )
}