import { Counter } from 'entities/Counter';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Page } from 'widgets/Page/ui/Page';

const MainPage = () => (
  <Page>
    <Counter />
    <ListBox
      onChange={() => { }}
      options={[{
        id: 1, content: 'SSSS', disabled: false, value: 'asdasd',
      }]}
      value="asda"
      defaultValue="Aaas"
    />
  </Page>
);

export default MainPage;
