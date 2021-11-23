import FlashCard from './components/FlashCard';
import Header from './components/Header';
import Main from './components/Main';
import { allFlashCards } from './components/data/allFlashCards';

export default function FlashCardsPage() {
  return (
    <>
      <Header>Flash-Cards</Header>

      <Main>
        <FlashCard title="Back-end" description="Stack server side"></FlashCard>
        <FlashCard
          title="Front-end"
          description="Stack client side"
        ></FlashCard>
      </Main>
    </>
  );
}
