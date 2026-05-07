import java.util.Scanner;

public class FoodOrderSystem {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        String[] foodItems = {"Burger", "Pizza", "Pasta", "Tea"};
        int[] price = {150, 500, 300, 50};

        int total = 0;
        int choice;
        char again;

        System.out.println("===== Welcome to Food Ordering System =====");

        do {
            System.out.println("\nMenu:");
            for (int i = 0; i < foodItems.length; i++) {
                System.out.println((i + 1) + ". " + foodItems[i] + " - Rs " + price[i]);
            }

            System.out.print("Enter your choice: ");
            choice = sc.nextInt();

            if (choice >= 1 && choice <= foodItems.length) {
                total += price[choice - 1];
                System.out.println(foodItems[choice - 1] + " added to cart!");
            } else {
                System.out.println("Invalid choice!");
            }

            System.out.print("Do you want to order more? (y/n): ");
            again = sc.next().charAt(0);

        } while (again == 'y' || again == 'Y');

        System.out.println("\nTotal Bill: Rs " + total);
        System.out.println("Thank you for ordering!");

        sc.close();
    }
}
