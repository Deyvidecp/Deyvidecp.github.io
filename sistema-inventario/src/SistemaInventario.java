import java.util.*;

class Produto {
    int id;
    String nome;
    int quantidade;
    double preco;

    Produto(int id, String nome, int quantidade, double preco) {
        this.id = id;
        this.nome = nome;
        this.quantidade = quantidade;
        this.preco = preco;
    }

    @Override
    public String toString() {
        return String.format("[%d] %s | Qtd: %d | Preço: R$ %.2f", id, nome, quantidade, preco);
    }
}

public class SistemaInventario {
    private static final Scanner scanner = new Scanner(System.in);
    private static final Map<Integer, Produto> inventario = new LinkedHashMap<>();
    private static int proximoId = 1;

    public static void main(String[] args) {
        while (true) {
            System.out.println("\n=== Sistema de Inventário ===");
            System.out.println("1. Adicionar produto");
            System.out.println("2. Listar produtos");
            System.out.println("3. Atualizar produto");
            System.out.println("4. Remover produto");
            System.out.println("5. Sair");
            System.out.print("Escolha uma opção: ");
            String opcao = scanner.nextLine();
            switch (opcao) {
                case "1":
                    adicionarProduto();
                    break;
                case "2":
                    listarProdutos();
                    break;
                case "3":
                    atualizarProduto();
                    break;
                case "4":
                    removerProduto();
                    break;
                case "5":
                    System.out.println("Saindo...");
                    return;
                default:
                    System.out.println("Opção inválida!");
            }
        }
    }

    private static void adicionarProduto() {
        System.out.print("Nome do produto: ");
        String nome = scanner.nextLine();
        System.out.print("Quantidade: ");
        int quantidade = lerInt();
        System.out.print("Preço: R$ ");
        double preco = lerDouble();
        Produto p = new Produto(proximoId++, nome, quantidade, preco);
        inventario.put(p.id, p);
        System.out.println("Produto adicionado com sucesso!");
    }

    private static void listarProdutos() {
        if (inventario.isEmpty()) {
            System.out.println("Nenhum produto cadastrado.");
            return;
        }
        System.out.println("\n--- Produtos ---");
        for (Produto p : inventario.values()) {
            System.out.println(p);
        }
    }

    private static void atualizarProduto() {
        listarProdutos();
        System.out.print("ID do produto para atualizar: ");
        int id = lerInt();
        Produto p = inventario.get(id);
        if (p == null) {
            System.out.println("Produto não encontrado.");
            return;
        }
        System.out.print("Novo nome (enter para manter): ");
        String nome = scanner.nextLine();
        if (!nome.isEmpty())
            p.nome = nome;
        System.out.print("Nova quantidade (enter para manter): ");
        String qtdStr = scanner.nextLine();
        if (!qtdStr.isEmpty())
            p.quantidade = Integer.parseInt(qtdStr);
        System.out.print("Novo preço (enter para manter): ");
        String precoStr = scanner.nextLine();
        if (!precoStr.isEmpty())
            p.preco = Double.parseDouble(precoStr);
        System.out.println("Produto atualizado!");
    }

    private static void removerProduto() {
        listarProdutos();
        System.out.print("ID do produto para remover: ");
        int id = lerInt();
        if (inventario.remove(id) != null) {
            System.out.println("Produto removido!");
        } else {
            System.out.println("Produto não encontrado.");
        }
    }

    private static int lerInt() {
        while (true) {
            try {
                return Integer.parseInt(scanner.nextLine());
            } catch (NumberFormatException e) {
                System.out.print("Digite um número inteiro válido: ");
            }
        }
    }

    private static double lerDouble() {
        while (true) {
            try {
                return Double.parseDouble(scanner.nextLine().replace(",", "."));
            } catch (NumberFormatException e) {
                System.out.print("Digite um valor numérico válido: ");
            }
        }
    }
}