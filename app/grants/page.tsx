"use client";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Calendar, Euro, FileText } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, PaginationEllipsis } from '@/components/ui/pagination';
import Link from 'next/link';

interface Grant {
  uid: string;
  title: string;
  description: string;
  deadline_date: string;
}

export default function Grants2025() {
  const [grants, setGrants] = useState<Grant[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(15);
  const [totalPages, setTotalPages] = useState(0);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  function getRandomArbitrary(min: number, max: number) {
    const num = Math.floor(Math.random() * (max - min) + min);
    return Math.floor(num / 1000) * 1000;
  }

  function getRandomRange() {
    // Step 1: define boundaries
    const min1 = 10000;
    const max1 = 100000;
    const min2 = 50000;
    const max2 = 2000000;
  
    // Step 2: pick random numbers in those ranges, in steps of 10_000
    const first = Math.floor(
      (Math.random() * ((max1 - min1) / 10000 + 1) + min1 / 10000)
    ) * 10000;
  
    const second = Math.floor(
      (Math.random() * ((max2 - min2) / 10000 + 1) + min2 / 10000)
    ) * 10000;
  
    // Step 3: ensure first <= second
    const start = Math.min(first, second);
    const end = Math.max(first, second);
  
    return { start, end };
  }

  useEffect(() => {
    async function fetchGrants() {
      try {
        const response = await fetch(`http://37.27.243.207:8000/grants?page=${currentPage}&page_size=21`);
        const data = await response.json();
        setGrants(data.items);
        setTotalPages(data.total_pages);
        console.log(data.items);
      } catch (error) {
        console.error('Error fetching grants:', error);
      }
    }
    fetchGrants();
  }, [currentPage]);

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <PaginationItem key={i} className='cursor-pointer'>
            <PaginationLink 
              onClick={() => handlePageChange(i)}
              isActive={currentPage === i}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }
    } else {
      pages.push(
        <PaginationItem key={1} className='cursor-pointer'>
          <PaginationLink 
            onClick={() => handlePageChange(1)}
            isActive={currentPage === 1}
          >
            1
          </PaginationLink>
        </PaginationItem>
      );

      if (currentPage > 3) {
        pages.push(<PaginationEllipsis key="ellipsis1" />);
      }

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(
          <PaginationItem key={i} className='cursor-pointer'>
            <PaginationLink 
              onClick={() => handlePageChange(i)}
              isActive={currentPage === i}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }

      if (currentPage < totalPages - 2) {
        pages.push(<PaginationEllipsis key="ellipsis2" />);
      }

      pages.push(
        <PaginationItem key={totalPages} className='cursor-pointer'>
          <PaginationLink 
            onClick={() => handlePageChange(totalPages)}
            isActive={currentPage === totalPages}
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return pages;
  };
  

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Grants 2025</h1>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
            Explore available grant opportunities for 2025. We help you navigate the application process 
            and maximize your chances of success.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {grants.map((grant, index) => (
              <Link href={`/grants/${grant.uid}`} key={index}  className='block h-full w-full'>
                <Card key={index} className="hover:shadow-lg transition-smooth h-full">
                  <CardHeader>
                    <div className="flex gap-2">
                  <FileText size={20} className="shrink-0 text-primary" />
                    <CardTitle className="flex items-center gap-2 relative">
                      {grant.title}
                    </CardTitle>
                    </div>
                    <CardDescription>{grant.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar size={20} className="shrink-0 text-muted-foreground" />
                        <span>Deadline: {grant.deadline_date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Euro size={20} className="shrink-0 text-muted-foreground" />
                        <span>{getRandomRange().start} - {getRandomRange().end}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {totalPages > 1 && (
            <Pagination className="mt-10">
              <PaginationContent>
                <PaginationItem className='cursor-pointer'>
                  <PaginationPrevious 
                    onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                    className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                  />
                </PaginationItem>
                
                {renderPageNumbers()}
                
                <PaginationItem className='cursor-pointer'>
                  <PaginationNext 
                    onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                    className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

