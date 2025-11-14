import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: 'Zap',
      title: 'Электромонтаж',
      description: 'Профессиональный монтаж электропроводки в квартирах, домах и офисах'
    },
    {
      icon: 'Lightbulb',
      title: 'Освещение',
      description: 'Установка и подключение светильников, люстр, светодиодных систем'
    },
    {
      icon: 'Power',
      title: 'Силовые линии',
      description: 'Монтаж розеток, выключателей, электрощитов и автоматики'
    },
    {
      icon: 'Shield',
      title: 'Безопасность',
      description: 'Установка УЗО, дифавтоматов, заземление и молниезащита'
    },
    {
      icon: 'Settings',
      title: 'Ремонт и обслуживание',
      description: 'Диагностика, ремонт и модернизация электросетей'
    },
    {
      icon: 'Clock',
      title: 'Срочный выезд',
      description: 'Экстренные работы 24/7, устранение аварийных ситуаций'
    }
  ];

  const prices = [
    { service: 'Монтаж розетки / выключателя', price: 'от 500 ₽' },
    { service: 'Установка люстры / светильника', price: 'от 800 ₽' },
    { service: 'Монтаж электрощита', price: 'от 3500 ₽' },
    { service: 'Прокладка кабеля (за м.п.)', price: 'от 200 ₽' },
    { service: 'Замена электропроводки (1-комн.)', price: 'от 15000 ₽' },
    { service: 'Диагностика неисправностей', price: 'от 1000 ₽' },
    { service: 'Подключение электроплиты', price: 'от 2000 ₽' },
    { service: 'Срочный выезд (в течение часа)', price: 'от 1500 ₽' }
  ];

  const reviews = [
    {
      name: 'Алексей М.',
      rating: 5,
      text: 'Отличная работа! Сделали полную замену проводки в квартире быстро и качественно. Все аккуратно, без пыли. Рекомендую!',
      date: '15.10.2024'
    },
    {
      name: 'Ольга П.',
      rating: 5,
      text: 'Вызывала мастера для установки светильников. Приехал вовремя, работу выполнил отлично. Цены адекватные.',
      date: '08.10.2024'
    },
    {
      name: 'Дмитрий К.',
      rating: 5,
      text: 'Профессионалы своего дела! Установили электрощит и автоматику. Все объяснили, дали гарантию. Спасибо!',
      date: '22.09.2024'
    }
  ];

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Zap" className="text-primary" size={32} />
              <span className="text-2xl font-bold">ProVolt</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <button 
                onClick={() => scrollToSection('home')}
                className={`hover:text-primary transition-colors ${activeSection === 'home' ? 'text-primary' : ''}`}
              >
                Главное
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className={`hover:text-primary transition-colors ${activeSection === 'services' ? 'text-primary' : ''}`}
              >
                Услуги
              </button>
              <button 
                onClick={() => scrollToSection('prices')}
                className={`hover:text-primary transition-colors ${activeSection === 'prices' ? 'text-primary' : ''}`}
              >
                Прайс
              </button>
              <button 
                onClick={() => scrollToSection('reviews')}
                className={`hover:text-primary transition-colors ${activeSection === 'reviews' ? 'text-primary' : ''}`}
              >
                Отзывы
              </button>
              <button 
                onClick={() => scrollToSection('contacts')}
                className={`hover:text-primary transition-colors ${activeSection === 'contacts' ? 'text-primary' : ''}`}
              >
                Контакты
              </button>
            </div>
            <Button 
              onClick={() => scrollToSection('contacts')}
              className="bg-secondary hover:bg-secondary/90"
            >
              <Icon name="Phone" size={18} className="mr-2" />
              Заказать звонок
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4 animate-fade-in">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Профессиональные электромонтажные работы
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Быстро, качественно, с гарантией. Работаем в Москве и области. Более 10 лет опыта.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg bg-primary hover:bg-primary/90"
              onClick={() => scrollToSection('services')}
            >
              <Icon name="Briefcase" size={20} className="mr-2" />
              Наши услуги
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg border-primary text-primary hover:bg-primary/10"
              onClick={() => scrollToSection('contacts')}
            >
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Связаться
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">лет опыта</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">выполненных объектов</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">аварийная служба</div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Полный спектр электромонтажных работ для дома и офиса
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1 bg-card border-border"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} className="text-primary" size={28} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Прайс-лист</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Прозрачные цены без скрытых платежей
          </p>
          <Card className="bg-card border-border">
            <CardContent className="p-0">
              <div className="divide-y divide-border">
                {prices.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex justify-between items-center p-6 hover:bg-muted/50 transition-colors"
                  >
                    <span className="text-base font-medium">{item.service}</span>
                    <span className="text-lg font-bold text-primary">{item.price}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <p className="text-center text-muted-foreground mt-6">
            * Точная стоимость определяется после осмотра объекта
          </p>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Отзывы клиентов</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Что говорят о нас наши клиенты
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-card border-border">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-secondary fill-secondary" />
                      ))}
                    </div>
                  </div>
                  <CardDescription className="text-sm">{review.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/90">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
          <p className="text-muted-foreground mb-12 text-lg">
            Свяжитесь с нами удобным способом
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-card border-border hover:shadow-lg hover:shadow-primary/20 transition-all">
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" className="text-primary" size={28} />
                </div>
                <CardTitle>Телефон</CardTitle>
              </CardHeader>
              <CardContent>
                <a 
                  href="tel:+79029342417" 
                  className="text-xl font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  8 902 934-24-17
                </a>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg hover:shadow-secondary/20 transition-all">
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="MessageCircle" className="text-secondary" size={28} />
                </div>
                <CardTitle>WhatsApp</CardTitle>
              </CardHeader>
              <CardContent>
                <a 
                  href="https://wa.me/79029342417" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xl font-semibold text-secondary hover:text-secondary/80 transition-colors"
                >
                  Написать
                </a>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg hover:shadow-primary/20 transition-all">
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" className="text-primary" size={28} />
                </div>
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <a 
                  href="mailto:dima.sobolev102210@mail.ru" 
                  className="text-lg font-semibold text-primary hover:text-primary/80 transition-colors break-all"
                >
                  dima.sobolev102210@mail.ru
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-lg px-8"
              onClick={() => window.open('https://wa.me/79029342417', '_blank')}
            >
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8 px-4">
        <div className="container mx-auto text-center text-muted-foreground">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Zap" className="text-primary" size={24} />
            <span className="text-xl font-bold text-foreground">ProVolt</span>
          </div>
          <p>© 2024 Все права защищены</p>
          <p className="mt-2">Профессиональные электромонтажные работы</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;