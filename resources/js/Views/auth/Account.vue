<script>
    export default {
        name: "AccountSettings",
        beforeCreate() {
            this.$bind.mapActions('Auth', {
                isLoading: 'isLoading',
                update: 'update',
            })
            this.$bind.mapState('Auth', {
                $errors: '$errors',
            })
            this.$bind.mapGetters('Auth', {
                entity: 'entity',
            })
        },
        beforeDestroy() {
            this.$errors.clear()
        }
    }
</script>
<template>
    <div class="layout-centered">
        <div class="card" v-if="entity">
            <div class="card-header">
                Account Settings
            </div>
            <form ref="form" @submit.prevent="update(entity)">
                <div class="card-content">
                    <div class="grid">
                        <div class="grid-item w-full md:w-1/2">
                            <v-input
                                type="text"
                                label="Name"
                                name="name"
                                :required="true"
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
                                :required="true"
                                autocomplete="email"
                                v-model="entity.email"
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
                </div>
                <div class="card-actions">
                    <v-action
                        type="submit"
                        dusk="action-submit"
                        class="btn-lg btn-green"
                        :loading="isLoading('account.update')">
                        Save
                    </v-action>
                </div>
            </form>
        </div>
    </div>
</template>
