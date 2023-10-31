import { Counter } from '@/entities/Counter';
import { RatingCard } from '@/entities/Rating';
import { Page } from '@/widgets/Page/ui/Page';

const MainPage = () => (
  <Page>
    <Counter />
    <RatingCard
      feedbackTitle="feedback Title"
      title="title"
      hasFeedback
    />
  </Page>
);

export default MainPage;
