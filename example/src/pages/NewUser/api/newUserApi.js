import axios from 'axios'

/**
 * КЛЮЧИ ОТ АПИ НАДО ХРАНИТЬ В ПЕРЕМЕННЫХ ОКРУЖЕНИЯ, ЁБ ТВОЮ МАТЬ
 * Логику запроса я не менял, но он очевидно не работает. С этим сам ебись
 * @param credentials
 * @returns {Promise<AxiosResponse<any>>}
 */

export const createUser = (credentials) => axios.post('https://61f82792783c1d0017c44601.mockapi.io/api/v1/users', {
    users: credentials
})
