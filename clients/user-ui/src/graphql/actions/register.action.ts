"use client"

import { gql } from '@apollo/client'
import { DocumentNode } from 'graphql'

export const REGISTER_USER: DocumentNode = gql`
mutation RegisterUser(
    $name: String!
    $email: String!
    $password: String!
    $phone_number: Float!
) {
    register(
        registerDto: {
            name: $name,
            email: $email,
            password: $password,
            phone_number: $phone_number
        }
    ) {
        activation_token    
    }
}
`