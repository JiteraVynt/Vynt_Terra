import { FilterTerrariumResponseBody, useFilterTerrariumQuery, FilterTerrariumRequestBody } from "@services/terrarium";
import React, { useMemo, useState } from "react";
import { TableColumnDefinition, Table } from "@components/atoms/Table";
import DefaultHeader from "@components/molecules/DefaultHeader";
import { Text } from "@components/atoms/Text";
import DefaultFooter from "@components/molecules/DefaultFooter";
import { DefaultPageProps } from "@interfaces/page";

import styles from './index.module.css';

type HomeProps = DefaultPageProps & {
  className?: string;
  }

function Home (props: HomeProps): JSX.Element {
  const [filterTerrariumParams, setFilterTerrariumParams] = useState<Partial<FilterTerrariumRequestBody>>({})
const filterTerrariumQuery = useFilterTerrariumQuery(filterTerrariumParams)
const columnsTable1 = useMemo<TableColumnDefinition<FilterTerrariumResponseBody['terrariums'][number]>[]>(() => [{ name: 'Id', path: "id", sortable: false},
{ name: 'Created At', path: "created_at", sortable: false},
{ name: 'Updated At', path: "updated_at", sortable: false},
{ name: 'Name', path: "name", sortable: false}], [])
  
  
  const handleTable1PageChange = (pageIndex: number,pageSize: number) => {
  setFilterTerrariumParams({})
}
  return (<div className={styles.page_container} ><DefaultHeader className={styles.defaultheader_1} />
<div className={styles.box_0} ><Text textType='Text' className={styles.text_1} >{'TERRA SUN'}</Text>
<Table data={filterTerrariumQuery.data?.terraria} totalPage={filterTerrariumQuery.data?.total_pages} onPaginationChange={handleTable1PageChange} isHeaderVisible isFooterVisible={false} isDataSortable={false} isPaginationEnabled paginationPosition='right' pageSize={20} className={styles.table_1} columns={columnsTable1} actions={[]} wrapperStyle={{ width: "100%", backgroundColor: "rgb(255, 255, 255)", color: "rgb(0, 0, 0)", overflowX: "auto"}} tableStyle={{ backgroundColor: "rgb(255, 255, 255)", color: "rgb(0, 0, 0)", width: "100%", border: "1px solid rgb(0, 0, 0)"}} headerColumnStyle={{ backgroundColor: "#c6e6be", color: "rgb(0, 0, 0)", fontSize: "16px", textAlign: "center", fontWeight: "bold", border: "1px solid rgb(0, 0, 0)", padding: "8px 16px 8px 16px"}} bodyColumnStyle={{ backgroundColor: "rgb(255, 255, 255)", color: "rgb(0, 0, 0)", fontSize: "14px", whiteSpace: "nowrap", textAlign: "left", border: "1px solid rgb(0, 0, 0)", padding: "4px 8px 4px 8px"}} paginationWrapperStyle={{ margin: "12px 0px 0px 0px"}} /></div>
<DefaultFooter className={styles.defaultheader_1} btn_prop={'Hola'} onPress={{}} /></div>);
}

export default Home;
