<script>
    export default {
        name: "UsersEdit",
        beforeCreate() {
            this.$bind.mapGetters('Auth', {
                userId: 'entity.id',
            })
            this.$bind.mapGetters('UserResource', {
                entity: 'entity',
            })
            this.$bind.mapActions('UserResource', {
                isLoading: 'isLoading',
                update: 'update',
                store: 'store',
            })
            this.$bind.mapState('UserResource', {
                $request: '$request',
                $errors: '$errors',
                roles: 'roles',
            })
        },
        created() {
            this.$errors.clear()
        },
        beforeDestroy() {
            this.$errors.clear()
        },
    }
</script>
<template>
    <div class="lg:max-w-4xl mx-auto" v-if="entity">
        <div class="card">
            <div class="card-header">
                <router-link
                    tabindex="1"
                    v-if="entity.id"
                    dusk="entity-show"
                    :to="$link('users.show').withParams({id: entity.id})">
                    <i class="fa fa-user"/> {{ entity.name || 'New User' }}
                </router-link>
                <div v-else>
                    <i class="fa fa-user"/> {{ entity.name || 'New User' }}
                </div>
            </div>
            <form ref="form" @submit.prevent>
                <div class="card-content">
                    <div class="grid">
                        <div class="grid-item w-full md:w-1/2">
                            <v-input
                                type="text"
                                label="Name"
                                name="name"
                                autocomplete="name"
                                v-model="entity.name"
                                @change="$errors.forget('name')"
                                :invalid="$errors.has('name')"
                                :help="$errors.first('name', 'Enter your name.')">
                            </v-input>
                        </div>
                        <div class="grid-item w-full md:w-1/2">
                            <v-input
                                type="text"
                                name="email"
                                label="Email Address"
                                v-model="entity.email"
                                autocomplete="email"
                                @change="$errors.forget('email')"
                                :invalid="$errors.has('email')"
                                :help="$errors.first('email', 'Enter your email.')">
                            </v-input>
                        </div>
                        <div class="grid-item w-full md:w-1/2">
                            <v-input
                                type="password"
                                label="Password"
                                name="password"
                                v-model="entity.password"
                                autocomplete="new-password"
                                @change="$errors.forget('password')"
                                :invalid="$errors.has('password')"
                                :help="$errors.first('password', 'Enter your secure password.')">
                            </v-input>
                        </div>
                        <div class="grid-item w-full md:w-1/2">
                            <v-input
                                type="password"
                                label="Password Confirmation"
                                name="password_confirmation"
                                autocomplete="new-password"
                                v-model="entity.password_confirmation"
                                @change="$errors.forget('password_confirmation')"
                                :invalid="$errors.has('password_confirmation')"
                                :help="$errors.first('password_confirmation', 'Confirm your secure password.')">
                            </v-input>
                        </div>
                    </div>
                    <v-input-select
                        icon="fa-lock"
                        label="Role "
                        help="Select user role."
                        v-model="entity.role"
                        v-if="userId !== entity.id"
                        :options="roles"
                    />

                </div>
                <div class="card-actions">
                    <v-action
                        v-if="entity.id"
                        dusk="action-update"
                        class="btn-lg btn-blue"
                        :disabled="isLoading('users.update')"
                        @click="update(entity, $link('users.show').withParams({id: entity.id}))">
                        Update
                    </v-action>
                    <v-action
                        v-else
                        dusk="action-save"
                        class="btn-lg btn-blue"
                        :disabled="isLoading('users.store')"
                        @click="store(entity)">
                        Save
                    </v-action>
                </div>
            </form>
        </div>
    </div>
</template>
