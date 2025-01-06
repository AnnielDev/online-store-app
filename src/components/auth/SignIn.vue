<script setup lang="ts">
import { ref, computed } from "vue";
import Auth from "@/api/Auth";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/user";
//
const store = useAuthStore();
const emit = defineEmits(["auth"]);
const user = ref<{ email: string; password: string }>({
  email: "",
  password: "",
});
const router = useRouter();
let visible = ref<boolean>(false);
let isEmpty = ref<boolean>(false);
let loading = ref<boolean>(false);
let isInvalid = ref<boolean>(false);

const rules = {
  required: (value: string) => !!value || "Required field",
  email: (value: string) => /.+@.+\..+/.test(value) || "Email must be valid",
};

// fuctions
async function onSubmit(): Promise<void> {
  try {
    loading.value = true;
    if (user.value.email && user.value.password) {
      const { data } = await Auth.signIn(user.value);
      store.setUser(data.data);
      clearInputs();
      router.push({ path: "/shop", replace: true });
    } else {
      isEmpty.value = true;
    }
  } catch (err: any) {
    if (!err.response.data.success) {
      isInvalid.value = true;
    }
  } finally {
    loading.value = false;
  }
}

function clearInputs(): void {
  user.value.email = "";
  user.value.password = "";
}

// computed
const showDialog = computed({
  get: () => isEmpty.value || isInvalid.value,
  set: (value: boolean) => {
    isEmpty.value = value;
    isInvalid.value = value;
  },
});
</script>

<template>
  <v-sheet
    class="d-flex flex-column align-center justify-center h-100 bg-transparent"
  >
    <v-container>
      <div class="d-flex justify-center align-center mb-10">
        <img src="../../assets/auth/cart.png" alt="" />
      </div>

      <v-row justify="center">
        <v-col cols="12" md="6" lg="4">
          <v-form @submit.prevent="onSubmit">
            <v-text-field
              v-model="user.email"
              :rules="[rules.required, rules.email]"
              class="mb-2 flex-1"
              label="Email"
              clearable
              prepend-inner-icon="mdi-email"
              base-color="white"
              variant="solo-filled"
            />

            <v-text-field
              v-model="user.password"
              :rules="[rules.required]"
              label="Password"
              prepend-inner-icon="mdi-lock"
              placeholder="Enter your password"
              variant="solo-filled"
              base-color="white"
              :type="visible ? 'text' : 'password'"
              :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
              @click:append-inner="visible = !visible"
            />
            <br />
            <v-btn
              color="white"
              size="large"
              type="submit"
              variant="elevated"
              block
              :loading="loading"
              text-color="#2148C0"
            >
              Sign In
            </v-btn>
            <div class="text-center py-2 text-white">
              <span>
                Do you have an account?
                <span
                  class="v-label--clickable font-weight-bold"
                  @click="emit('auth', false)"
                  >Sign Up</span
                >
              </span>
            </div>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>

  <v-dialog width="auto" v-model="showDialog">
    <v-card title="Warning">
      <v-card-text>
        {{
          isEmpty && !isInvalid
            ? "You must to fill out all fields."
            : isInvalid && !isEmpty
            ? "Invalid credentials."
            : ""
        }}</v-card-text
      >
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text="Close" @click="showDialog = false" />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped>
span > span:hover {
  text-decoration: underline;
}
</style>
