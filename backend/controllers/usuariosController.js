import User from  '../models/usuarios.js';

// rota GET: Função responsável por fazer a busca por todos os usuarios
export const getAllUser = async(req,res) => {
    // Tenta buscar os usuários no banco de dados
    try {
        // Faz a busca dos usuarios
        const users = await User.findAll(); 
        // Atualiza o status  e mostra os usuarios criados
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json(`Erro searching user: ${error.message}`);
    }
}

// rota POST: Função responsável por criar um usuário
export const createUser = async(req,res) => {
    try {
        // Salva a requisição do body no Postgres
        const newUser = await User.create(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(404).json(`Erro create user: ${error.message}`);
    }
    
}
