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
            <v-toolbar flat class="transparent">
                <v-list class="pa-0">
                    <v-list-tile avatar>
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

            <v-list subheader>
                <v-subheader>Frontend</v-subheader>
                <v-list-tile
                        v-for="(item, i) in topItems"
                        :key="i"
                        @click=""
                >
                    <v-list-tile-action>
                        <v-icon v-html="item.icon"></v-icon>
                    </v-list-tile-action>
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
                        @click=""
                >
                    <v-list-tile-action>
                        <v-icon v-html="item.icon"></v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title v-text="item.title"></v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>

            <v-list class="bottom-menu">
                <v-list-tile
                        v-for="(item, i) in bottomItems"
                        :key="i"
                        @click=""
                >
                    <v-list-tile-action>
                        <v-icon v-html="item.icon"></v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title v-text="item.title"></v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>

        <v-toolbar
                app
                tabs
        >
            <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-lg-and-up"></v-toolbar-side-icon>
            <v-toolbar-title>Dashboard</v-toolbar-title>
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

            <v-tabs
                    v-model="tabs"
                    fixed-tabs
                    color="transparent"
                    slot="extension"
                    slider-color="black"
            >
                <v-tab
                        v-for="tabsItem in tabsItems"
                        :key="tabsItem"
                        :href="'#tabs-' + tabsItem"
                >
                    {{ tabsItem }}
                </v-tab>
            </v-tabs>
        </v-toolbar>

        <v-content>
            <v-container>
                <v-layout row>
                    <v-flex xs12 md8 offset-md2>
                        <v-card color="white">
                            <v-tabs-items v-model="tabs">
                                <v-tab-item
                                        v-for="tabsItem in tabsItems"
                                        :key="tabsItem"
                                        :id="'tabs-' + tabsItem"
                                >
                                    <v-card-text>{{ tabsItem }}</v-card-text>
                                </v-tab-item>
                            </v-tabs-items>
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
                        title: 'Home'
                    },
                    {
                        icon: 'person',
                        title: 'Contacts'
                    },
                    {
                        icon: 'event_note',
                        title: 'Events'
                    }
                ],
                middleItems: [
                    {
                        icon: 'dashboard',
                        title: 'Dashboard'
                    },
                    {
                        icon: 'person_add',
                        title: 'Users'
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
                tabs: null,
                tabsItems: [
                    'Indicators', 'Backup', 'Log'
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
