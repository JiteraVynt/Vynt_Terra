import type { NextPageContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { dehydrate } from 'react-query';
import { initServerInfo, errorHandler } from '@utils/serverSide';
import { fetchFilterTerrarium } from '@services/terrarium';
import DashboardTerrariumsPage from '@components/pages/DashboardTerrariums';

export async function getServerSideProps(context: NextPageContext) {
  const { locale = 'en', query } = context;
  const options: {
    props?: Record<string, unknown>;
    redirect?: Record<string, unknown>;
  } = {};
  const { session, queryClient } = await initServerInfo(context);

  if (!session?.user?.accessToken) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  try {
    await fetchFilterTerrarium(queryClient, {});
  } catch (error: unknown) {
    return errorHandler(error);
  }
  return {
    ...options,
    props: {
      query: query || null,
      session,
      dehydratedState: dehydrate(queryClient),
      seo: {
        title: 'Terra Sun',
        description: '',
      },
      ...(await serverSideTranslations(locale)),
      ...(options.props || {}),
    },
  };
}

export default DashboardTerrariumsPage;
