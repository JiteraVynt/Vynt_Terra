import DefaultHeader from "@components/molecules/DefaultHeader";
import { HamburgerMenu } from "@components/atoms/HamburgerMenu";
import { Menu, MenuItem } from "@components/atoms/Menu";
import { Text } from "@components/atoms/Text";
import Image from "next/image";
import DefaultFooter from "@components/molecules/DefaultFooter";
 import { useNavigateService } from "@services/navigate";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";

import styles from './index.module.css';

type HomeProps = DefaultPageProps & {
  className?: string;
  }

function Home (props: HomeProps): JSX.Element {
  const navigation = useNavigateService()
  
  
  const handleHamburgermenu1Menuitem = () => {
  navigation.navigate('/500')
}
  return (<div className={styles.page_container} ><DefaultHeader className={styles.defaultheader_1} />
<div className={styles.box_0} ><HamburgerMenu drawerTitle={undefined} className={styles.hamburgermenu_1_container} iconProps={{ iconName: "MdMenu", color: "null", activeColor: "null", inactiveColor: "null", checkColor: "null"}} drawerProps={{ color: "null", activeColor: "null", inactiveColor: "null", checkColor: "null", placement: "left", width: 256, closable: false, headerVisible: false}} buttonProps={{ buttonType: "primary", color: "null", activeColor: "null", inactiveColor: "null", checkColor: "null"}} ><Menu mode='inline' className={styles.hamburgermenu_1_menu} ><MenuItem iconPosition='left' label='Home' spaceBetween={4} iconProps={{ elementKey: "", gutter: [], drawerTitle: [], placeholder: [], inputLabel: [], href: [], action: [], data: [], totalPage: [], defaultValue: [], source: [], title: [], childrenData: [], responsiveVisibility: [], dataSource: [], tableColumns: [], tableActions: [], onPaginationChange: [], onDataSortingChange: [], iconName: "AiOutlineHome", color: "null", activeColor: "null", inactiveColor: "null", checkColor: "null"}} className={styles.hamburgermenu_1_menuitem} onClick={handleHamburgermenu1Menuitem} />
<MenuItem iconPosition='left' label='US' spaceBetween={4} iconProps={{ elementKey: "", gutter: [], drawerTitle: [], placeholder: [], inputLabel: [], href: [], action: [], data: [], totalPage: [], defaultValue: [], source: [], title: [], childrenData: [], responsiveVisibility: [], dataSource: [], tableColumns: [], tableActions: [], onPaginationChange: [], onDataSortingChange: [], iconName: "BsApple", color: "null", activeColor: "null", inactiveColor: "null", checkColor: "null"}} className={styles.menuitem_3} /></Menu></HamburgerMenu>
<<<<<<< HEAD
<Text textType='Text' className={styles.text_1} >{'Nguyễn Triệu Vỹ'}</Text></div>
=======
<Text textType='Text' className={styles.text_1} >{'Nguyễn Triệu Vỹ'}</Text>
<Image className={styles.image_1} width='300' height='300' src='https://picsum.photos/600/600' alt='image_1' /></div>
>>>>>>> origin/master
<DefaultFooter className={styles.defaultheader_1} btn_prop={'Hola'} onPress={{}} /></div>);
}

export default Home;
