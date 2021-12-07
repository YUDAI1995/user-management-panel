<template>
  <section>
    <h2>User Registration</h2>
    <form class="form">
      <div class="formGroup">
        <label for="id">ID</label>
        <input
          type="text"
          class="formInput"
          id="id"
          placeholder="ID"
          :value="inputID"
          @input="onInputID"
        />
      </div>
      <div class="formGroup">
        <label for="name">Name</label>
        <input
          type="text"
          class="formInput"
          id="name"
          placeholder="NAME"
          v-model="formData.name"
        />
      </div>
      <div class="formGroup">
        <label for="id">Email</label>
        <input
          type="email"
          class="formInput"
          id="email"
          placeholder="Email"
          v-model="formData.email"
        />
      </div>
      <button @click.prevent="onRegisterBtn">Add New</button>
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { UserData } from '../../model/user.model';

export default defineComponent({
  name: 'UserRegistrationForm',
  data() {
    return {
      inputID: '',
      formData: {
        id: 0,
        name: '',
        email: '',
      } as UserData,
    };
  },
  methods: {
    onInputID(event: { target: HTMLInputElement }) {
      if (+event.target.value.slice(-1) || event.target.value.length === 0) {
        this.inputID = event.target.value;
      } else {
        event.target.value = this.inputID;
      }
    },
    onRegisterBtn() {
      if (this.inputID && this.formData.name && this.formData.email) {
        const newData = new UserData(
          +this.inputID,
          this.formData.name,
          this.formData.email
        );
        this.$emit('onRegisterHandler', newData);
      }
    },
  },
});
</script>
