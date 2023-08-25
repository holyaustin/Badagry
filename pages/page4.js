import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from '../theme';
import SEO from '../components/seo';
import Layout from '../components/layout2';
import Footer from './Footer'
// import Mintfile from '../components/Mintfile';
// import Watching from '../components/watching';
import Watching from '../components/viewing4';

export default function AddFile() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Add new file"
          description="add a new file"
        />
        <Watching />

      </Layout>
      <Footer />
    </ThemeProvider>

  );
}