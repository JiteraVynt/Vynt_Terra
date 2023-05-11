import {
  FilterTerrariumResponseBody,
  useFilterTerrariumQuery,
  FilterTerrariumRequestBody,
} from '@services/terrarium';
import React, { useMemo, useState } from 'react';
import { TableColumnDefinition, Table } from '@components/atoms/Table';
import DashboardButton from '@components/molecules/DashboardButton';
import DashboardNavbar from '@components/molecules/DashboardNavbar';
import { Row } from '@components/atoms/Row';
import { Col } from '@components/atoms/Col';
import DashboardSidebar from '@components/molecules/DashboardSidebar';
import { Text } from '@components/atoms/Text';
import DashboardFooter from '@components/molecules/DashboardFooter';
import { DefaultPageProps } from '@interfaces/page';

import styles from './index.module.css';

type DashboardTerrariumsProps = DefaultPageProps & {
  className?: string;
};

function DashboardTerrariums(props: DashboardTerrariumsProps): JSX.Element {
  const [filterTerrariumParams, setFilterTerrariumParams] = useState<
    Partial<FilterTerrariumRequestBody>
  >({});
  const filterTerrariumQuery = useFilterTerrariumQuery(filterTerrariumParams);
  const columnsTable2 = useMemo<
    TableColumnDefinition<FilterTerrariumResponseBody['terrariums'][number]>[]
  >(
    () => [
      { name: 'Id', path: 'id', sortable: false },
      { name: 'Created At', path: 'created_at', sortable: false },
      { name: 'Updated At', path: 'updated_at', sortable: false },
      { name: 'Name', path: 'name', sortable: false },
      { name: 'Price', path: 'price', sortable: false },
      { name: 'Discription', path: 'discription', sortable: false },
    ],
    [],
  );
  const actionsTable2 = useMemo<
    TableColumnDefinition<FilterTerrariumResponseBody['terrariums'][number]>[]
  >(
    () => [
      {
        name: 'Delete',
        renderColumn: (innerProps) => (
          <DashboardButton label={'Delete'} {...innerProps.row.original} />
        ),
      },
      {
        name: 'Edit',
        renderColumn: (innerProps) => (
          <DashboardButton label={'Edit'} {...innerProps.row.original} />
        ),
      },
    ],
    [],
  );

  return (
    <div className={styles.page_container}>
      <DashboardNavbar className={styles.dashboardnavbar_1} />
      <div className={styles.dashboard_main}>
        <div className={styles.dashboard_main_wrapper}>
          <Row gutter={[30, 30]} justify="start" align="top" className={styles.row_1}>
            <Col xs={24} md={24} xl={6} className={styles.col_1}>
              <DashboardSidebar className={styles.dashboardnavbar_1} />
            </Col>
            <Col xs={24} md={24} xl={18} className={styles.col_2}>
              <div className={styles.dashboard_content}>
                <div className={styles.dashboard_content_title}>
                  <Text textType="Text" className={styles.text_9}>
                    {'Terrariums'}
                  </Text>
                </div>
                <div className={styles.dashboard_content_filter_table}>
                  <div className={styles.box_8}>
                    <Table
                      data={filterTerrariumQuery.data?.terraria}
                      isHeaderVisible
                      isFooterVisible={false}
                      isDataSortable={false}
                      className={styles.table_2}
                      columns={columnsTable2}
                      actions={actionsTable2}
                      wrapperStyle={{
                        backgroundColor: 'rgb(255, 255, 255)',
                        color: 'rgb(0, 0, 0)',
                        overflowX: 'auto',
                      }}
                      tableStyle={{
                        backgroundColor: 'rgb(255, 255, 255)',
                        color: 'rgb(0, 0, 0)',
                        border: '1px solid rgb(0, 0, 0)',
                      }}
                      headerColumnStyle={{
                        backgroundColor: 'rgb(255, 255, 255)',
                        color: 'rgb(0, 0, 0)',
                        fontSize: '16px',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        border: '1px solid rgb(0, 0, 0)',
                        padding: '8px 16px 8px 16px',
                      }}
                      bodyColumnStyle={{
                        backgroundColor: 'rgb(255, 255, 255)',
                        color: 'rgb(0, 0, 0)',
                        fontSize: '14px',
                        whiteSpace: 'nowrap',
                        textAlign: 'left',
                        border: '1px solid rgb(0, 0, 0)',
                        padding: '4px 8px 4px 8px',
                      }}
                      footerColumnStyle={{
                        backgroundColor: 'rgb(255, 255, 255)',
                        color: 'rgb(0, 0, 0)',
                        fontSize: '16px',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        border: '1px solid rgb(0, 0, 0)',
                        padding: '8px 16px 8px 16px',
                      }}
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <DashboardFooter className={styles.dashboardnavbar_1} />
    </div>
  );
}

export default DashboardTerrariums;
