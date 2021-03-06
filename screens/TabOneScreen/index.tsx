import React from 'react';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Container, Separator, Title } from './styles';

const TabOneScreen: React.FC = () => {
  return (
    <Container>
      <Title>Pagina Um</Title>
      <Separator />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </Container>
  )
}

export default TabOneScreen;