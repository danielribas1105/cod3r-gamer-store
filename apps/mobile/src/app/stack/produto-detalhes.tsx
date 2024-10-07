import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import Especificacoes from '../../components/produto/especificacoes'
import BannerCompra from '../../components/produto/banner-compra'
import MedidorDePreco from '@/src/components/produto/medidor-preco'
import AvaliacoesUsuarios from '@/src/components/produto/avaliacoes-usuarios'
import Cores from '@/src/data/constants/Cores'

export default function ProdutoDetalhes(props: any) {
   const { produto } = props.route.params
   if (!produto) return null

   return (
      <ScrollView style={styles.container}>
         <View style={styles.produtoInfo}>
            <Text style={styles.titulo}>{produto.nome}</Text>
            <View style={styles.imagemBackground}>
               <Image src={produto.imagem} style={styles.imagem} />
            </View>
            <Especificacoes produto={produto} />
         </View>
         <BannerCompra produto={produto} />
         <MedidorDePreco produto={produto} />
         <AvaliacoesUsuarios produto={produto} />
         <View style={{ height: 50 }} />
      </ScrollView>
   )
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingVertical: 20,
      gap: 10,
      backgroundColor: Cores.BG_PRIMARIO,
   },
   produtoInfo: {
      backgroundColor: Cores.BG_SECUNDARIO,
      padding: 20,
      gap: 20,
   },
   titulo: {
      color: '#FFFFFF',
      fontSize: 18,
      fontWeight: '600',
      marginBottom: 5,
   },
   imagemBackground: {
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      borderRadius: 10,
      padding: 20,
      height: 230,
   },
   imagem: {
      width: '80%',
      height: '100%',
      borderRadius: 10,
   },
})
