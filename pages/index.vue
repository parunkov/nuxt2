<script setup>
const isAuth = useAuth();
const users = useUsers();
const user = ref({ login: '', password: '' });
let name = '';
let isError = ref(false);

const onSubmit = () => {
  const dataUser = users.value.find((item) => item.login === user.value.login);
  if (dataUser && dataUser.password === user.value.password) {
    name = user.value.login;
    isError.value = false;
    isAuth.value = true;
    user.value = { login: '',  password: '' };
  } else {
    isError.value = true;
  }
}

const onExit = () => {
  isError.value = false;
  isAuth.value = false;
}
</script>
<template>
    <div class="container">
      <div class="title mt-3">
        <h2>{{ isAuth ? `Пользователь ${name}` : 'Авторизация' }}</h2>
      </div>
      <form v-if="!isAuth" class="form">
        <label for="login" class="form-label"><b>Логин</b></label>
        <input
          v-model="user.login"
          type="text"
          class="form-control mb-3"
          placeholder="Логин"
          name="login"
          required
        />
        <label for="password" class="form-label"><b>Пароль</b></label>
        <input
          v-model="user.password"
          type="password"
          class="form-control mb-3"
          placeholder="Пароль"
          name="password"
          required
        />
        <div v-if="isError" class="alert alert-danger" role="alert">
          Неправильный логин или пароль
        </div>
        <button type="button" class="btn btn-primary mb-3" @click="onSubmit">Войти</button>
      </form>
      <button v-if="isAuth" type="button" class="btn btn-primary mb-3" @click="onExit">Выйти</button>
    </div>
</template>
<style scoped>
  .form {
    width: 300px;
  }
</style>