import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table"

interface PropertyPrice {
  cash?: number
  cashTempo?: number
  kpr?: number
  bookingFee?: number
}

interface PropertyUnit {
  detailArea: string
  typeBuild: string
  roadName: string
  unitNumber: number
  landArea: number
  landUnit: string
  buildingArea: number
  buildingUnit: string
  price?: PropertyPrice
  available: boolean
}

const propertyUnits: PropertyUnit[] = [
  {
    detailArea: "7 m x 17.5 m",
    typeBuild: "BLOK RUBI",
    roadName: "Jalan Utama",
    unitNumber: 1,
    landArea: 122,
    landUnit: "m²",
    buildingArea: 100,
    buildingUnit: "m²",
    price: {
      cash: 925000000,
      cashTempo: 971250000,
      kpr: 5000000,
      bookingFee: 92500000,
    },
    available: true,
  },
  {
    detailArea: "6.5 m x 17.2 m",
    typeBuild: "BLOK RUBI",
    roadName: "Jalan Utama",
    unitNumber: 2,
    landArea: 112,
    landUnit: "m²",
    buildingArea: 100,
    buildingUnit: "m²",
    price: {
      cash: 920000000,
      cashTempo: 975200000,
      kpr: 5000000,
      bookingFee: 92000000,
    },
    available: false,
  },
  {
    detailArea: "6.5 m x 16.9 m",
    typeBuild: "BLOK RUBI",
    roadName: "Jalan Utama",
    unitNumber: 3,
    landArea: 110,
    landUnit: "m²",
    buildingArea: 100,
    buildingUnit: "m²",
    price: {
      cash: 910000000,
      cashTempo: 964600000,
      kpr: 5000000,
      bookingFee: 91000000,
    },
    available: true,
  },
  // ... (other PropertyUnit objects)
]

const StaticTable = () => {
  return (
    <Table>
      {/* <TableCaption>Ketersediaan Unit</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Detail Area</TableHead>
          <TableHead>Type Build</TableHead>
          <TableHead>Road Name</TableHead>
          <TableHead>Unit Number</TableHead>
          <TableHead>Land Area</TableHead>
          <TableHead>Building Area</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {propertyUnits.map((unit, index) => (
          <TableRow key={`unit-${index}`}>
            <TableCell className="font-medium">{unit.detailArea}</TableCell>
            <TableCell className="font-medium">{unit.typeBuild}</TableCell>
            <TableCell className="font-medium">{unit.roadName}</TableCell>
            <TableCell className="font-medium">{unit.unitNumber}</TableCell>
            <TableCell className="font-medium">{unit.landArea}</TableCell>
            <TableCell className="font-medium">{unit.buildingArea}</TableCell>
            <TableCell className="font-medium">
              {unit.available ? "Tersedia" : "Sold"}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default StaticTable
