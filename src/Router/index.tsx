import { Route, Routes } from 'react-router';

import Layout from '../Layout';
import MainPage from '../pages/MainPage';
import Characters from '../pages/Characters';
import Page404 from '../pages/Page404';

const Router = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/characters/:pageNumber?" element={<Characters />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  </Layout>
);

export default Router;
