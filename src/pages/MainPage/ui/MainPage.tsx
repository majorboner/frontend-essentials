import { Counter } from '@/entities/Counter';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { Page } from '@/widgets/Page/ui/Page';

const MainPage = () => (
  <Page>
    <Counter />
    <StarRating />
  </Page>
);

export default MainPage;
