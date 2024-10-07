import { StyleSheet, SafeAreaView, Text, ScrollView } from 'react-native'
import CabecalhoCheckout from '@/src/components/checkout/cabecalho-checkout'
import FormularioEntrega from '@/src/components/checkout/pagamento/formulario-entrega'
import ResumoPagamento from '@/src/components/checkout/pagamento/resumo-pagamento'
import SelecaoFormaPagamento from '@/src/components/checkout/pagamento/selecao-forma-pagamento'
import useCarrinho from '@/src/data/hooks/useCarrinho'
import usePagamento from '@/src/data/hooks/usePagamento'

export default function Pagamento() {
   const { parcelamento, qtdeItens, valorTotal, valorTotalCheio } = useCarrinho()
   const { entrega, formaPagamento, alterarEntrega, alterarFormaPagamento, finalizarCompra } =
      usePagamento()

   return (
      <SafeAreaView style={styles.container}>
         <CabecalhoCheckout passo="pagamento" />
         <ScrollView contentContainerStyle={styles.containerScroll}>
            <Text style={styles.titulo}>Forma de Pagamento</Text>
            <SelecaoFormaPagamento
               formaPagamento={formaPagamento}
               formaPagamentoMudou={alterarFormaPagamento}
            />

            <Text style={styles.titulo}>Dados da Entrega</Text>
            <FormularioEntrega entrega={entrega} entregaMudou={alterarEntrega} />
         </ScrollView>

         <ResumoPagamento
            qtdeItens={qtdeItens}
            valorTotal={valorTotal}
            valorTotalCheio={valorTotalCheio}
            parcelamento={parcelamento}
            finalizarCompra={finalizarCompra}
         />
      </SafeAreaView>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#0E001D',
   },
   containerScroll: {
      justifyContent: 'center',
      alignItems: 'center',
   },
   titulo: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#FFF',
   },
})
