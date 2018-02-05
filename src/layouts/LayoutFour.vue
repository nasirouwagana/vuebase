<template>
    <v-app>
        <v-navigation-drawer
                persistent
                :mini-variant="miniVariant"
                v-model="drawer"
                fixed
                absolute
                app
        >
            <v-toolbar flat class="transparent" dense>
                <v-list class="pa-0">
                    <v-list-tile>
                        <v-list-tile-avatar v-if="!miniVariant">
                            <v-icon large class="text--primary">invert_colors</v-icon>
                        </v-list-tile-avatar>
                        <v-list-tile-content v-if="!miniVariant">
                            <v-list-tile-title><h2>Vuebase</h2></v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-btn icon @click.stop="miniVariant = !miniVariant">
                                <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
                            </v-btn>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list>
            </v-toolbar>
            <v-divider></v-divider>

            <v-toolbar flat class="transparent" dense>
            <v-list class="pa-0">
                <v-list-tile :to="'/'" >
                    <v-list-tile-avatar>
                        <v-icon>home</v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-title>Project Overview</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
            </v-toolbar>
            <v-divider></v-divider>

            <v-list subheader>
                <v-subheader>Frontend</v-subheader>
                <v-list-tile
                        v-for="(item, i) in topItems"
                        :key="i"
                        :to="item.link"
                        exact
                >
                    <v-list-tile-avatar>
                        <v-icon v-html="item.icon"></v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-title v-text="item.title"></v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
            <v-divider></v-divider>

            <v-list subheader>
                <v-subheader>Backend</v-subheader>
                <v-list-tile
                        v-for="(item, i) in middleItems"
                        :key="i"
                        :to="item.link"
                        exact
                >
                    <v-list-tile-avatar>
                        <v-icon v-html="item.icon"></v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-title v-text="item.title"></v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
            <v-divider></v-divider>

            <v-list>
                <v-list-group
                        v-for="item in someItems"
                        :key="item.title"
                        :prepend-icon="item.icon"
                        no-action
                >
                    <v-list-tile slot="activator">
                        <v-list-tile-content>
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile v-for="subItem in item.items" :key="subItem.title" @click="">
                        <v-list-tile-content>
                            <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-icon>{{ subItem.icon }}</v-icon>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list-group>
            </v-list>

            <v-list class="bottom-menu">
                <v-list-tile
                        v-for="(item, i) in bottomItems"
                        :key="i"
                        @click=""
                >
                    <v-list-tile-avatar>
                        <v-icon v-html="item.icon"></v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-title v-text="item.title"></v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>

        <v-toolbar
                app
                flat
                dense
        >
            <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-sm-and-up"></v-toolbar-side-icon>
            <!--<v-toolbar-title class="pl-2">Dashboard</v-toolbar-title>-->
            <v-menu :nudge-width="100">
                <v-toolbar-title slot="activator" class="pl-2">
                    <span>{{ menuItems[2] }}</span>
                    <v-icon>arrow_drop_down</v-icon>
                </v-toolbar-title>
                <v-list>
                    <v-list-tile v-for="item in menuItems" :key="item" @click="">
                        <v-list-tile-title v-text="item"></v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu>
            <v-spacer></v-spacer>
            <v-btn icon @click.stop="rightDrawer = !rightDrawer">
                <v-badge color="red" overlap>
                    <span slot="badge">2</span>
                    <v-icon>notifications</v-icon>
                </v-badge>
            </v-btn>

            <v-menu
                    bottom
                    left
            >
                <v-btn icon slot="activator">
                    <v-avatar class="white" size="32px">
                        <v-icon light>person</v-icon>
                    </v-avatar>
                </v-btn>
                <v-list>
                    <v-list-tile avatar>
                        <v-list-tile-avatar>
                            <v-avatar class="black" size="48px">
                                <v-icon dark>person</v-icon>
                            </v-avatar>
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                            <v-list-tile-title>John Doe</v-list-tile-title>
                            <v-list-tile-sub-title>Administrator</v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
                <v-divider></v-divider>
                <v-list>
                    <v-list-tile key="profile" @click="">
                        <v-list-tile-action>
                            <v-icon>person</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>My Profile</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider></v-divider>
                    <v-list-tile key="lock_open" @click="">
                        <v-list-tile-action>
                            <v-icon>lock_open</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Logout</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-menu>
        </v-toolbar>

        <v-content>
            <v-toolbar
                    dense
                    extended
                    tabs
            >
                <v-toolbar-title class="pl-2">Dashboard</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tabs
                        v-model="tabs"
                        :fixed-tabs="false"
                        color="transparent"
                        slider-color="black"
                        slot="extension"
                >
                    <v-tab
                            v-for="tabsItem in tabsItems"
                            :key="tabsItem.id"
                            :to="tabsItem.link"
                    >
                        <span class="pl-2 pr-2">{{ tabsItem.title }}</span>
                    </v-tab>
                </v-tabs>
            </v-toolbar>

            <v-container>
                <v-layout row>
                    <v-flex xs12 md8 offset-md2>
                        <v-card>
                            <v-card-text>
                                <router-view></router-view>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>

        <v-navigation-drawer
                temporary
                :right="right"
                v-model="rightDrawer"
                fixed
                app
        >
            <v-toolbar flat prominent>
                <v-toolbar-title>Notifications</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon @click.stop="rightDrawer = false">
                    <v-icon>close</v-icon>
                </v-btn>
            </v-toolbar>
            <v-list subheader dense>
                <v-subheader>All notifications</v-subheader>
                <v-list-tile @click="">
                    <v-list-tile-action>
                        <v-icon>person_add</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-title>
                        12 new users registered
                    </v-list-tile-title>
                </v-list-tile>
                <v-divider></v-divider>
                <v-list-tile @click="">
                    <v-list-tile-action>
                        <v-icon>data_usage</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-title>
                        DB overloaded 80%
                    </v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </v-app>
</template>

<script>
    export default {
        data () {
            return {
                drawer: true,
                fixed: false,
                topItems: [
                    {
                        icon: 'home',
                        title: 'Home',
                        link: '/'
                    },
                    {
                        icon: 'person',
                        title: 'Contacts',
                        link: ''
                    },
                    {
                        icon: 'event_note',
                        title: 'Events',
                        link: ''
                    }
                ],
                middleItems: [
                    {
                        icon: 'dashboard',
                        title: 'Dashboard',
                        link: '/indicators'
                    },
                    {
                        icon: 'person_add',
                        title: 'Users',
                        link: ''
                    }
                ],
                bottomItems: [
                    {
                        icon: 'settings',
                        title: 'Settings'
                    },
                    {
                        icon: 'help',
                        title: 'Help'
                    },
                    {
                        icon: 'comment',
                        title: 'Comments'
                    }
                ],
                miniVariant: false,
                right: true,
                rightDrawer: false,
                tabs: 'tabs-1',
                tabsItems: [
                    {id: 1, title: 'Indicators', link: 'indicators'},
                    {id: 2, title: 'Backup', link: 'backup'},
                    {id: 3, title: 'Logs', link: 'logs'}
                ],
                menuItems: [
                    'USA', 'France', 'Chine', 'Canada'
                ],
                someItems: [
                    {
                        icon: 'layers',
                        title: 'Products',
                        active: true,
                        items: [
                            {title: 'Create a product'},
                            {title: 'List of products'}
                        ]
                    },
                    {
                        icon: 'layers',
                        title: 'Categories',
                        active: true
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .bottom-menu {
        position: absolute;
        width: 100%;
        bottom: 0;
    }
</style>
