import { Injectable, signal } from '@angular/core';

export interface SiteRecord {
  [key: string]: string | number;
  name: string;
  capacity: string;
  siteId: string;
  audits: number;
  lat: string;
  region: string;
  country: string;
}

export interface SelfAuditRecord {
  [key: string]: string | number;
  name: string;
  capacity: string;
  loadPointId: string;
  buildingType: string;
  lat: string;
  region: string;
  country: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuditDataService {
  private allSitesData = signal<SiteRecord[]>([
    {
      name: 'Ibiade',
      capacity: '0.0216',
      siteId: 'Ibiade-Site-706',
      audits: 63,
      lat: '6.5441, 4.3374',
      region: 'Ogun',
      country: 'Nigeria'
    },
    {
      name: 'Otuan',
      capacity: '0.2',
      siteId: 'Otuan-byy-999',
      audits: 63,
      lat: '6.5441, 4.3374',
      region: 'Ogun',
      country: 'Nigeria'
    },
    {
      name: 'Korokorosei',
      capacity: '0.5',
      siteId: 'Koro-Sei-111',
      audits: 200,
      lat: '6.5441, 4.3374',
      region: 'Bayelsa',
      country: 'Nigeria'
    },
    {
      name: 'Aguobiri',
      capacity: '0.1',
      siteId: 'Aguu-222',
      audits: 70,
      lat: '6.5441, 4.3374',
      region: 'Bayelsa',
      country: 'Nigeria'
    },
    {
      name: 'Igebiri',
      capacity: '0.0324',
      siteId: 'Igebiri-byy-022',
      audits: 50,
      lat: '6.5441, 4.3374',
      region: 'Bayelsa',
      country: 'Nigeria'
    },
    {
      name: 'Famgbe',
      capacity: '0.0412',
      siteId: 'Famb-114',
      audits: 42,
      lat: '6.4221, 4.2377',
      region: 'Delta',
      country: 'Nigeria'
    },
    {
      name: 'Sapele',
      capacity: '0.092',
      siteId: 'Sapele-013',
      audits: 91,
      lat: '5.8942, 5.6765',
      region: 'Delta',
      country: 'Nigeria'
    },
    {
      name: 'Ikorodu',
      capacity: '0.15',
      siteId: 'Ikd-081',
      audits: 80,
      lat: '6.6190, 3.5105',
      region: 'Lagos',
      country: 'Nigeria'
    },
    {
      name: 'Ado-Ekiti',
      capacity: '0.31',
      siteId: 'Ekiti-204',
      audits: 34,
      lat: '7.6233, 5.2209',
      region: 'Ekiti',
      country: 'Nigeria'
    },
    {
      name: 'Owerri',
      capacity: '0.12',
      siteId: 'Owerri-552',
      audits: 68,
      lat: '5.4833, 7.0333',
      region: 'Imo',
      country: 'Nigeria'
    }
  ]);

  private selfAuditData = signal<SelfAuditRecord[]>([
    {
      name: 'Mike',
      capacity: '0.0216',
      loadPointId: 'Ibiade-Site-706',
      buildingType: 'Duplex',
      lat: '6.5441, 4.3374',
      region: 'Ogun',
      country: 'Nigeria'
    },
    {
      name: 'Mr Haruna',
      capacity: '0.2',
      loadPointId: 'Otuan-byy-999',
      buildingType: 'Storeys',
      lat: '6.5441, 4.3374',
      region: 'Ogun',
      country: 'Nigeria'
    },
    {
      name: 'Joseph',
      capacity: '0.5',
      loadPointId: 'Koro-Sei-111',
      buildingType: 'Bungalow',
      lat: '6.5441, 4.3374',
      region: 'Bayelsa',
      country: 'Nigeria'
    },
    {
      name: 'Adamu House',
      capacity: '0.1',
      loadPointId: 'Aguu-222',
      buildingType: 'Bungalow',
      lat: '6.5441, 4.3374',
      region: 'Bayelsa',
      country: 'Nigeria'
    },
    {
      name: 'Ogunleye',
      capacity: '0.0324',
      loadPointId: 'Igebiri-byy-022',
      buildingType: 'Storeys',
      lat: '6.5441, 4.3374',
      region: 'Bayelsa',
      country: 'Nigeria'
    },
    {
      name: 'Chinwe',
      capacity: '0.21',
      loadPointId: 'Famb-114',
      buildingType: 'Duplex',
      lat: '6.4221, 4.2377',
      region: 'Delta',
      country: 'Nigeria'
    },
    {
      name: 'Usman',
      capacity: '0.07',
      loadPointId: 'Sapele-013',
      buildingType: 'Bungalow',
      lat: '5.8942, 5.6765',
      region: 'Delta',
      country: 'Nigeria'
    },
    {
      name: 'Ngozi',
      capacity: '0.14',
      loadPointId: 'Ikd-081',
      buildingType: 'Storeys',
      lat: '6.6190, 3.5105',
      region: 'Lagos',
      country: 'Nigeria'
    },
    {
      name: 'Tobi',
      capacity: '0.19',
      loadPointId: 'Ekiti-204',
      buildingType: 'Duplex',
      lat: '7.6233, 5.2209',
      region: 'Ekiti',
      country: 'Nigeria'
    },
    {
      name: 'Amina',
      capacity: '0.09',
      loadPointId: 'Owerri-552',
      buildingType: 'Bungalow',
      lat: '5.4833, 7.0333',
      region: 'Imo',
      country: 'Nigeria'
    }
  ]);

  allSites = this.allSitesData.asReadonly();
  selfAudits = this.selfAuditData.asReadonly();
}
