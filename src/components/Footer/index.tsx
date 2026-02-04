import { ArrowCounterClockwise } from 'phosphor-react';
import { useContextSelector } from 'use-context-selector';
import { TransactionsContext } from '../../contexts/TransactionsContext'; 
import { FooterContainer, ResetButton } from './style';



export function Footer() {
  const resetTransactions = useContextSelector(
    TransactionsContext, 
    (context) => context.resetTransactions
  );

  return (
    <FooterContainer>
      <span>Dados salvos localmente (Browser Storage).</span>
      <ResetButton onClick={resetTransactions}>
        <ArrowCounterClockwise size={16} weight="bold" />
        Resetar App
      </ResetButton>
    </FooterContainer>
  );
}