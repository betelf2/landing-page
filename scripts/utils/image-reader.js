/**
 * Verifica se uma imagem existe no servidor.
 * 
 * Esta função envia uma requisição HTTP do tipo 'HEAD' para o servidor, verificando apenas os cabeçalhos da resposta
 * (sem baixar o conteúdo da imagem). Ela retorna 'true' se a imagem existir (status 200-299) e 'false' caso contrário.
 * 
 * @param {string} imagePath - O caminho completo da imagem no servidor, incluindo o nome do arquivo e a extensão.
 * @returns {boolean} Retorna 'true' se a imagem existe no servidor, ou 'false' se não existir ou ocorrer um erro.
 */
async function imageExists(imagePath) 
{
    try {
        // Envia uma requisição 'HEAD' para o servidor, a qual verifica se o arquivo existe sem baixar o conteúdo
        const response = await fetch(imagePath, { method: 'HEAD' });

        // Verifica se o status da resposta é OK (códigos de 200 a 299)
        if (!response.ok) {
            // Se o status não for OK (como um erro 404), a imagem não existe
            return false;
        }

        // Se a resposta for OK, significa que a imagem foi encontrada
        return true;
    } catch (error) {
        // Caso ocorra algum erro (como erro de rede), loga o erro e retorna false
        console.warn(`Erro ao verificar a imagem: ${imagePath}`, error);
        return false;
    }
}

/**
 * Captura o endereço de uma sequência de imagens dentro de uma pasta, em ordem numérica.
 * 
 * Esta função percorre uma pasta especificada e busca imagens que sigam uma
 * sequência numérica, como "0.jpg", "1.jpg", "2.jpg", etc. O processo
 * continua até que uma imagem da sequência não seja encontrada, momento em que
 * o loop é encerrado e a função retorna o endereço de todas as imagens encontradas até o momento.
 *
 * @param {string} addr - O caminho da pasta onde as imagens estão armazenadas.
 * @returns {Array} - Um array contendo objetos `string` do endereço das imagens encontradas na sequência.
 *
 * @example
 * const imagens = await getValidImgPaths('images/hero/main');
 * console.log(imagens.length); // Mostra o número de imagens encontradas na pasta
 */
export async function getValidImgPaths(addr) {
    let index = 0;
    let imagePaths = [];
    const formats = ['jpg', 'png', 'gif', 'jpeg'];

    while (true) 
    {
        let foundImage = false;

        for (const ext of formats) {
            const imagePath = `${addr}/${index}.${ext}`;

            // Use fetch to check if the image exists before loading it
            const imageExistsFlag = await imageExists(imagePath);

            // Se a imagem existir, adiciona o caminho no array 'imagePaths' 
            // e interrompe a busca pelos outros formatos
            if (imageExistsFlag) 
            {
                imagePaths.push(imagePath);
                foundImage = true;
                break; 
            }
        }

        if (!foundImage) break; // Se nenhuma imagem válida foi encontrada, interrompe o laço principal

        index++;
    }

    return imagePaths;
}