import bcrypt from 'bcrypt'

const salt = bcrypt.genSaltSync(Number(process.env.SALT_ROUND))

export const hash = (plainText) => {
    return bcrypt.hashSync(plainText, salt)
}

export const compare = (cipherText, hash) => {
    return bcrypt.compareSync(cipherText, hash)
}