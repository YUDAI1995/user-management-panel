<template>
  <div class="">
    <h1>User</h1>
    <button @click.prevent="onShowModal">NEW</button>
    <table class="userTable">
      <colgroup></colgroup>
      <thead class="">
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>EMAIL</th>
          <th>EDIT</th>
          <th>DELETE</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in userList" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>
            <button class="updateBtn" @click.prevent="onUpdateBtn(user)">
              EDIT
            </button>
          </td>
          <td>
            <button class="deleteBtn" @click.prevent="onDelete(user.id)">
              DELETE
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <Modal v-if="isShowModal" @close-fromModal="onCloseModal">
    <UserUpdateForm
      v-if="updateData"
      @onUpdateHandler="updateUser"
      :updateData="updateData"
    />
    <UserRegistrationForm v-else @onRegisterHandler="registerUser" />
  </Modal>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { UserData, UpdateDataType } from '../model/user.model';
import Modal from './components/Modal.vue';
import UserRegistrationForm from './components/UserRegistrationForm.vue';
import UserUpdateForm from './components/UserUpdateForm.vue';

export default defineComponent({
  name: 'App',
  components: { Modal, UserRegistrationForm, UserUpdateForm },
  data() {
    return {
      userList: [] as UserData[],
      isShowModal: false,
      updateData: false as UpdateDataType,
    };
  },
  created() {
    this.userList = [
      {
        id: 1,
        name: 'John Smith',
        email: 'sample01@sample.com',
      },
    ];
  },
  methods: {
    onShowModal() {
      this.isShowModal = true;
    },
    onCloseModal() {
      this.isShowModal = false;
      this.updateData = false;
    },
    registerUser(data: UserData) {
      this.userList = [data, ...this.userList];
      this.isShowModal = false;
    },
    onUpdateBtn(user: UserData) {
      this.updateData = user;
      this.isShowModal = true;
    },
    updateUser(data: UserData) {
      this.userList = this.userList.map((user) => {
        if (user.id === (this.updateData as UserData).id) {
          return data;
        } else return user;
      });

      this.isShowModal = false;
      this.updateData = false;
    },
    onDelete(id: number) {
      this.userList = this.userList.filter((user) => user.id !== id);
    },
  },
});
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
