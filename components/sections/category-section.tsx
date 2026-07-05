import { categories } from "@/data/categories";
import { CategoryCard } from "@/components/category-card";
import { SectionHeading } from "@/components/shared/section-heading";

export function CategorySection() {
  return (
    <section className="container-app py-14 sm:py-20" aria-label="Kategori produk">
      <SectionHeading
        title="Kategori Produk"
        description="Beragam pilihan untuk semua kebutuhanmu"
        className="mb-10"
      />
      <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        {categories.map((category, index) => (
          <CategoryCard key={category.id} category={category} index={index} />
        ))}
      </div>
    </section>
  );
}
