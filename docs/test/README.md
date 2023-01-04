# Тестування працездатності системи

## Відображення всіх сутностей (GET)

### Запит та результат

![get-all](./GET_all.png)

## Відображення однієї сутності по id (GET)

### Запит та результат

![get-one](./GET_one.png)

## Додавання сутності по id (POST)

### Запит

![post-correct](./POST_correct.png)

### Результат

![get-after-post](./GET_after_POST.png)

### Можливі помилки

![post-when-existing](./POST_incorrect.png)

![post-without-parameters](./POST_without_param.png)

## Оновлення сутності по id (PATCH)

### Запит

![patch-correct](./PATCH_correct.png)

### Результат

![get-after-patch](./GET_after_PATCH.png)

### Можливі помилки

![patch-with-incorrect-id](./PATCH_incorrect_id.png)

![patch-without-parameters](./PATCH_without_param.png)

## Видалення сутності по id (DELETE)

### Запит

![delete-correct](./DELETE_correct.png)

### Результат

![get-after-delete](./GET_after_DELETE.png)

### Можливі помилки

![delete-with-no-existing-id](./DELETE_incorrect.png)
