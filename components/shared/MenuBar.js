const { Menu } = require("antd");
const { Component } = require("react");

import '../css/menuBar.less'

class MenuBar extends Component {


    render() {
        const { Item, ItemGroup, SubMenu } = Menu
        return (
            <Menu className="menus" mode='horizontal'>
                <Item className="menu-item" key={1}>
                    HOME
                </Item>
                <SubMenu key={3} title="DASHBOARD">
                    <ItemGroup>
                        <SubMenu title="DOCTOR" key={4}>
                        <ItemGroup>
                        <Item className="menu-item" key={5}>
                            STATIC
                        </Item>
                        <Item className="menu-item" key={6}>
                            DYNAMIC
                        </Item>
                        </ItemGroup>
                        </SubMenu>
                        <SubMenu title="MANAGEMENT" key={7}>
                        <ItemGroup>
                        <Item className="menu-item" key={8}>
                            STATIC
                        </Item>
                        <Item className="menu-item" key={9}>
                            DYNAMIC
                        </Item>
                        </ItemGroup>
                        </SubMenu>
                        <SubMenu title="ADMIN" key={10}>
                        <ItemGroup>
                        <Item className="menu-item" key={11}>
                            STATIC
                        </Item>
                        <Item className="menu-item" key={12}>
                            DYNAMIC
                        </Item>
                        </ItemGroup>
                        </SubMenu>
                    </ItemGroup>
                </SubMenu>
            </Menu>
        )
    }
}

export default MenuBar